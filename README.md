# Yet One Business Card

[![MIT License](https://img.shields.io/pypi/l/aiogram.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<img width="713" alt="image" src="https://github.com/user-attachments/assets/5a830b08-ed02-451a-9fab-42308010fb3d">

## Introduction

Yet One Business Card is a simple and customizable business card generator. It allows you to create a personalized
business card with your personal and professional information, which is then generated in HTML format for easy sharing
and viewing in any web browser.

## Features

- Customizable personal and professional information.
- Supports various technical skills and social links.
- Generates a clean HTML business card.

## Installation

To set up the project, clone the repository and navigate to the project directory:

```shell
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd business_card
```

## Usage

To customize your business card, edit the `template/content.py` file. This file contains a dictionary named `data` that
holds all the personal and professional information to be displayed on the card. You can modify fields such as `name`,
`job_title`, `email`, and various technical skills and social links.

Once you've made your changes, build the business card using the following command:

```shell
make build-index-page
```

Open the generated `index.html` in your web browser to view your business card.

## Development Tools

### Bandit

[Bandit](https://github.com/PyCQA/bandit) is a tool designed to find common security issues in Python code. It processes
each file, builds an AST from it, and runs appropriate plugins against the AST nodes. Once Bandit has finished scanning
all the files, it generates a report.

```shell
bandit -r .
```

### flake8

[flake8](https://github.com/PyCQA/flake8) is a Python tool that glues together pycodestyle, pyflakes, mccabe, and
third-party plugins to check the style and quality of some Python code.

```shell
flake8 .
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.