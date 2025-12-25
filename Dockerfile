FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /srv/root

RUN apt update && apt install --no-install-recommends -y \
    git curl build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY ext/requirements.txt ./
RUN pip install -U pip
RUN pip install -r requirements.txt

RUN apt update && \
    apt install -y default-mysql-client redis-tools && \
    rm -rf /var/lib/apt/lists/*

# Create data directories
RUN mkdir -p .data/avatars .data/logs

# Copy application code
COPY . .

# Make scripts executable
RUN chmod +x scripts/*.sh 2>/dev/null || true

ENTRYPOINT [ "scripts/start_server.sh" ]
