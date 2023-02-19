FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /index

# Install the application dependencies
RUN yarn install

# Define the entry point for the container
CMD ["yarn", "server:build"]