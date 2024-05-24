# noinspection PyStatementEffect
{
    'name': 'Disable PDF.js Javascript Evaluation',
    'version': '1.0.0',
    'author': 'Avatud Lahendused',
    'license': 'Other proprietary',
    'website': 'https://www.avalah.ee',
    'data': [
        'static/src/script.xml',
    ],
    'depends': [
        'web',
        'mail_enterprise',
    ],
    'qweb': [
        'static/src/mail_enterprise.xml',
        'static/src/thread.xml',
    ],
    'installable': True,
}
