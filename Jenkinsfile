pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install --cache '
      }
    }

    stage('Build et Test') {
      steps {
        sh 'rm -rf node_modules'
        sh 'npm install'
        sh 'npm install @angular/cli'
        sh 'npm update @angular/cli @angular/core @angular/compiler @angular/compiler-cli'
        sh 'npm run build'
        sh 'npm run test'
      }
    }

    stage('Run in Docker') {
      steps {
        echo 'Hello oui non yes'
        sh 'docker build -t my-angular-app .'
        
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
    dockerTool 'docker'
  }
}
