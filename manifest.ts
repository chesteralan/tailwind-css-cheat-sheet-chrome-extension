import * as fs from 'fs';
import * as path from 'path';
import * as pkg from './package.json';

const manifestObject = {
    manifest_version: 3,
    version: pkg.version,
    name: pkg.title,
    description: pkg.description,
    icons: {
        48: "images/icon-48.png",
        144: "images/icon-144.png"
    },
    action: {
        default_title: pkg.title,
        default_popup: "index.html"
    },
    permissions: [
        "sidePanel"
    ],
    side_panel: {
        default_path: "index.html"
    }
}
fs.writeFile(
    path.join("dist", "manifest.json"),
    JSON.stringify(manifestObject),
    {},
    () => {
        console.log("Manifest File Created!")
    })