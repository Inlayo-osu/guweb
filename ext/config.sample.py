#!/usr/bin/env python3.12
# -*- coding: utf-8 -*-

import urllib.parse

# app name
app_name = 'changeme'

# secret key
secret_key = 'changeme'

#hCaptcha settings:
hCaptcha_sitekey = 'changeme'
hCaptcha_secret = 'changeme'

# domain (used for api, avatar, etc)
domain = 'changeme'

# max image size for avatars, in megabytes
max_image_size = 2

# mysql credentials
mysql = {
    'db': 'changeme',
    'host': 'changeme',
    'user': 'changeme',
    'password': 'changeme',
}

redisPASS= "changeme"
redisDSN = f"redis://:{urllib.parse.quote(redisPASS)}@localhost:6379/0"

# path to gulag root (must have leading and following slash)
path_to_gulag = '/home/ubuntu/bancho.py/'

# enable debug (disable when in production to improve performance)
debug = False

# disallowed names (hardcoded banned usernames)
disallowed_names = {
    'BanchoBot', 'Guest'
}

# disallowed passwords (hardcoded banned passwords)
disallowed_passwords = {
    'password'
}

# enable registration
registration = True

EMAIL_VERIFY_KEY_LENGTH=16
SENT_EMAIL_TIMEOUT=300
SMTP_SERVER_INFO={"host": "smtp.daum.net", "port": 465}
IMAP_SERVER_INFO={"host": "imap.daum.net", "port": 993}
SENDER_EMAIL="changeme"
SENDER_EMAIL_PASSWORD="changeme"
DISCORD_EMAIL_LOG_WEBHOOK = "changeme"

# social links (used throughout guweb)
github = 'https://github.com/changeme'
discord_server = 'https://discord.gg/changeme'
youtube = 'https://youtube.com/@changeme'
twitter = 'https://twitter.com/changeme'
instagram = 'https://instagram.com/changeme'
twitch = 'https://twitch.tv/changeme'
osuserver = 'https://osu-server-list.com/server/changeme'
