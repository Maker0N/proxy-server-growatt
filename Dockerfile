FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN yarn install

EXPOSE 3001

# Define the entry point for the container
CMD ["yarn", "server:build"]