# Use a base image with Node.js and Playwright pre-installed
FROM mcr.microsoft.com/playwright:v1.54.1-jammy

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY ./../package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Install Playwright browsers (if not already handled by the base image)
# RUN npx playwright install --with-deps

# Set the environment variable for CI (optional, but good practice for CI/CD)
ENV CI=true
ENV SECRET_KEY="SalesforceTypescriptPlaywright"

# Define the command to run your tests
CMD ["npx", "playwright", "test"]