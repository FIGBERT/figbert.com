import json
import os
from datetime import datetime

import pypandoc
from bs4 import BeautifulSoup


class generate_js:
    def __init__(self, _str, ordered):
        self.STR = _str
        self.JSON_PY = []
        self.JSON = ""
        self.DIR = os.path.dirname(os.path.realpath(__file__)) + f"/{_str}"
        self.EXPORT_FILE = (
            os.path.dirname(os.path.realpath(__file__))
            + f"/../src/routes/{_str}/_{_str}.js"
        )
        for filename in os.listdir(self.DIR):
            with open(os.path.join(self.DIR, filename), "r") as f:
                lines = [line for line in f.readlines()]
            metadata = lines[0].strip().split(",")
            title = metadata[0]
            slug = metadata[1]
            date = metadata[2]
            position = int(metadata[3]) if ordered else None
            content_md = "".join(lines[2:])
            first_paragraph_md = content_md.split("\n\n")[0]
            content_soup = BeautifulSoup(
                pypandoc.convert_text(content_md, "html5", format="gfm"), "html.parser"
            )
            first_paragraph_soup = BeautifulSoup(
                pypandoc.convert_text(first_paragraph_md, "html5", format="gfm"),
                "html.parser",
            )
            content = self.style_html(content_soup, False)
            first_paragraph = self.style_html(first_paragraph_soup, True)
            self.JSON_PY.append(
                {
                    "title": title,
                    "slug": slug,
                    "date": date,
                    "preview": first_paragraph,
                    "html": content,
                    "position": position,
                }
            )
        if ordered:
            self.JSON_PY = sorted(self.JSON_PY, key=lambda item: item["position"])
        else:
            self.JSON_PY = sorted(
                self.JSON_PY,
                key=lambda item: datetime.fromisoformat(
                    "{}-{}-{}".format(
                        item["date"].split("/")[2],
                        item["date"].split("/")[1],
                        item["date"].split("/")[0],
                    )
                ),
            )
        self.JSON = json.dumps(self.JSON_PY, indent=4)

    def style_html(self, soup, preview):
        for link in soup.find_all("a"):
            link["class"] = link.get("class", []) + ["underline"]
            if "https://" not in link.get("href") and "http://" not in link.get("href"):
                continue
            else:
                link["target"] = "_blank"
                link["rel"] = "noopener noreferrer"
        for paragraph in soup.find_all("p"):
            if preview:
                paragraph["class"] = paragraph.get("class", []) + ["text-sm", "preview"]
            else:
                paragraph["class"] = paragraph.get("class", []) + ["leading-loose mb-3"]
        for header in soup.find_all("h2"):
            header["class"] = header.get("class", []) + ["mb-3"]
        for quote in soup.find_all("blockquote"):
            quote["class"] = quote.get("class", []) + [
                "{}px-4 border-l border-gray-300 border-solid".format(
                    "mt-1 " if preview else ""
                )
            ]
        return str(soup)

    def write_out(self):
        output = (
            f"const {self.STR} = {self.JSON};\n\n{self.STR}.forEach("
            f"{self.STR[:-1]} => {{\n\t{self.STR[:-1]}.html = {self.STR[:-1]}"
            ".html.replace(/^\\t{3}/gm, "
            f'"");\n}});\n\nexport default {self.STR};'
        )
        with open(self.EXPORT_FILE, "w") as f:
            f.write(output)


blog = generate_js("posts", False)
projects = generate_js("projects", True)

if __name__ == "__main__":
    blog.write_out()
    projects.write_out()
