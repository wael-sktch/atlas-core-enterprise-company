const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const engagementsDir = path.join(root, "engagements");
const output = path.join(root, "engagement-index.json");

const engagements = [];

if (fs.existsSync(engagementsDir)) {

    const directories = fs
        .readdirSync(engagementsDir)
        .sort();

    for (const directory of directories) {

        if (!directory.startsWith("ENG-")) {
            continue;
        }

        const engagementPath =
            path.join(engagementsDir, directory);

        if (!fs.statSync(engagementPath).isDirectory()) {
            continue;
        }

        const readme =
            path.join(engagementPath, "README.md");

        if (!fs.existsSync(readme)) {
            continue;
        }

        const content =
            fs.readFileSync(readme, "utf8");

        function metadata(name, fallback = "") {

            const regex =
                new RegExp(
                    `^${name}:\\s*(.+)$`,
                    "im"
                );

            const match =
                content.match(regex);

            return match
                ? match[1].trim()
                : fallback;
        }

        const parts =
            directory.split("-");

        const engagementId =
            parts.length >= 2
                ? `${parts[0]}-${parts[1]}`
                : directory;

        const title =
            metadata(
                "title",
                directory
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, c => c.toUpperCase())
            );

        const status =
            metadata(
                "status",
                "PLANNED"
            ).toUpperCase();

        const description =
            metadata(
                "description",
                ""
            );

        const githubUrl =
            `https://github.com/wael-sktch/atlas-core-enterprise-company/tree/main/engagements/${directory}`;

        engagements.push({

            id: engagementId,

            title: title,

            status: status,

            description: description,

            slug: directory,

            url: githubUrl
        });
    }
}

fs.writeFileSync(
    output,
    JSON.stringify(
        engagements,
        null,
        2
    ) + "\n"
);

console.log(
    `Generated engagement-index.json with ${engagements.length} engagement(s).`
);