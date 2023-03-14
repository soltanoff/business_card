from datetime import date

from dateutil.relativedelta import relativedelta

data = {
    'title': 'pwnd',
    'name': 'Ilia Soltanov',
    'job_title': 'Technical Lead / Senior Software Engineer',
    'email': 'piccadillable@gmail.com',
    'start_experience': '2016-02-01',
    'experience_years': None,  # will be filled in automatically
    'experience_months': None,  # will be filled in automatically
    'main_lang': 'Python',
    'basic_tools': [
        'asyncio',
        'aiohttp',
        'FastAPI',
        'Django (+DRF)',
        'SQLAlchemy'
    ],
    'databases': [
        'MySQL',
        'PostgreSQL'
    ],
    'nosql_stores': [
        'Redis',
        'MongoDB'
    ],
    'web_servers': [
        'Nginx',
        'Apache'
    ],
    'monitoring': [
        'Zabbix',
        'Prometheus'
    ],
    'dashboards': [
        'Kibana',
        'Grafana'
    ],
    'virtualization': [
        'Docker',
        'Podman'
    ],
    'social_links': {
        'github': {
            'source': 'https://github.com/soltanoff',
            'label': '@soltanoff'
        },
        'linkedin': {
            'source': 'https://www.linkedin.com/in/soltanoff',
            'label': '@soltanoff'
        },
        'telegram': {
            'source': 'https://t.me/etozhepirozhok',
            'label': '@etozhepirozhok'
        },
        'instagram': {
            'source': 'https://www.instagram.com/etozhepirozhok',
            'label': '@etozhepirozhok'
        }
    }
}

_experience = relativedelta(date.today(), date.fromisoformat(data['start_experience']))
data['experience_years'] = _experience.years
data['experience_months'] = _experience.months
