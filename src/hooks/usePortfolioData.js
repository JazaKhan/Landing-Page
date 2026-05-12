import { useState, useEffect } from "react";
import { HERO_CONTENT, EXPERIENCES, PROJECTS } from "../constants";
import project from "../assets/projects/project.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

// Maps the image key you type in the sheet → the actual imported image file
const IMAGE_MAP = { project, project1, project2, project3, project4, project5, project6 };

// Paste your Google Sheet ID into your .env file as VITE_GOOGLE_SHEET_ID
// e.g. https://docs.google.com/spreadsheets/d/THIS_PART_HERE/edit
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || "";

function sheetUrl(tabName) {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`;
}

function parseCsv(raw) {
    const lines = raw.trim().split("\n");
    if (lines.length < 2) return [];
    const parseRow = (line) =>
        [...line.matchAll(/("(?:[^"]|"")*"|[^,]*)/g)]
            .map((m) => m[0].replace(/^"|"$/g, "").replace(/""/g, '"').trim())
            .slice(0, -1);
    const headers = parseRow(lines[0]);
    return lines.slice(1).map((line) => {
        const vals = parseRow(line);
        return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? ""]));
    });
}

export function usePortfolioData() {
    const [data, setData] = useState({
        heroBio: HERO_CONTENT,
        heroName: "Jaza Khan",
        heroTitle: "Software Developer",
        experiences: EXPERIENCES,
        projects: PROJECTS,
    });
    const [loading, setLoading] = useState(!!SHEET_ID);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!SHEET_ID) return; // no sheet ID set — uses local constants as fallback

        async function fetchAll() {
            try {
                const [heroRaw, expRaw, projRaw] = await Promise.all([
                    fetch(sheetUrl("Hero")).then((r) => r.text()),
                    fetch(sheetUrl("Experience")).then((r) => r.text()),
                    fetch(sheetUrl("Projects")).then((r) => r.text()),
                ]);

                // Hero tab: two columns — Key | Value
                const heroMap = Object.fromEntries(
                    parseCsv(heroRaw).map((r) => [r.Key, r.Value])
                );

                const experiences = parseCsv(expRaw).map((r) => ({
                    year: r.year,
                    role: r.role,
                    company: r.company,
                    description: r.description,
                    technologies: r.technologies.split(",").map((t) => t.trim()),
                    ...(r.link ? { link: r.link } : {}),
                }));

                const projects = parseCsv(projRaw).map((r) => ({
                    title: r.title,
                    image: IMAGE_MAP[r.imageKey] ?? project,
                    description: r.description,
                    technologies: r.technologies.split(",").map((t) => t.trim()),
                    link: r.link,
                }));

                setData({
                    heroBio: heroMap.bio ?? HERO_CONTENT,
                    heroName: heroMap.name ?? "Jaza Khan",
                    heroTitle: heroMap.title ?? "Software Developer",
                    experiences: experiences.length ? experiences : EXPERIENCES,
                    projects: projects.length ? projects : PROJECTS,
                });
            } catch (err) {
                console.warn("Could not load Google Sheet — using local data instead.", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchAll();
    }, []);

    return { data, loading, error };
}