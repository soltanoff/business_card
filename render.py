import jinja2

import content

if __name__ == "__main__":
    env = jinja2.Environment()

    with open("templates/index.html", "r") as f:
        template = f.read()
        rendered_template = env.from_string(template).render(content.data)

    with open("index.html", "w") as f:
        f.write(rendered_template)
