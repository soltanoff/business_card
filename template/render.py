from pathlib import Path

import content
import jinja2

if __name__ == "__main__":
    base_path = Path(__file__).parent
    env = jinja2.Environment()

    with open(base_path / "index.html", "r") as f:
        template = f.read()
        rendered_template = env.from_string(template).render(content.data)

    with open(base_path.parent / "index.html", "w") as f:
        f.write(rendered_template)
