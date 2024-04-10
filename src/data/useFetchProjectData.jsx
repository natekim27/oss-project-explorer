import { useMemo, useState, useEffect } from "react";
import { Octokit } from "octokit";

const useFetchProjectData = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const octokit = new Octokit({
            auth: "",
        })

        async function fetchProjects() {
            try {
                const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}?ref={branch}", {
                    owner: "gt-ospo",
                    repo: "oss-project-explorer-data",
                    path: "project_list.json",
                    branch: "json-form-test"
                })

                const content = atob(response.data.content)
                const projects = JSON.parse(content)

                setProjects(projects);

            } catch (error) {
                console.error("Something went wrong while fetching the projects...", error);
            }
        }

        fetchProjects();
    }, []);

    const data = useMemo(() => projects, [projects]);

    return (data);
};

export default useFetchProjectData;