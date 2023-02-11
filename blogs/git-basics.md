---
title: 'Git basics'
subtitle: 'Git is a version control system, manages code history, tracks changes and is a local tool.'
date: '2023-02-11'
---

## Version Management/Control

- Control and Tracking of code or any file changes over time
- Saving progress as you go
- To have backup files to get back to if any problems/bugs arises
- Avoid writing multiple side copies of files for every draft
- In version management, its easier to jump back and forth to any draft in single file

## Git & Github

- Git is Version Control System, manages code history, tracks changes and is a local tool.
- Github is Largest Development Platform, Cloud Hosting & Collaboration Provider, Git Repository(Git Project) Hosting.

## Text Based Computer Interaction (bash, zsh)

- Time Saving, start servers, download & install tools, run code, execute files, working with git.
- Where our project is

```bash
pwd
```

- Change Directory

```bash
# cd to home directory / inside user profile directory
cd ~

# cd to root directory / top level
cd /

# go back to up one hierarchy level from current level
cd ..

# cd to specific folder (use tab as you type some of the first letters of folder or file)
cd Git/

# Use \ before spaces in file or folder name
cd Git\ \&\ Github\ -\ The\ Practical\ Guide/

# cd to absolute path
cd cd /w/Documents/Git\ \&\ Github\ -\ The\ Practical\ Guide/

# clear the terminal
clear
```

- Create and Delete files and folder

```bash
# create folders
mkdir folder_name

# create file/s
touch index.html
touch styles.css app.js

# delete file/s
rm index.html
rm styles.css app.js

# delete folder/directory which is empty
rmdir folder_name

ls -s # list files along with its size
ls -l # list files with additional data like creator, date, time
ls -ls # list files with additional info and size

# delete non-empty folder
rm -r folder_name
```

- Copy and move

```bash
# copy file
cp source_path target_path

# copy all files from the folder
# without / the folder will also get copied
cp -r source_path/ target_path/

# move file
mv source_path target_path/

# move folder
mv source_path target_path/

# rename existing files
mv styles.css style.css
```

- For Command Prompt (cmd) on Windows

```bash
# change local disk
D:

# list files and folder in current directory
dir

# clear terminal
cls

# create file
echo content of the file > test.txt

# see content of file
type test.txt

# delete file and folder
del test.txt
rmdir folder_name

# copy file/folder
copy source_path target_path

# move file/folder
move source_path target_path
```

## How Git Works(Simplified)

- Working directory

```
web shop
|_index.html
|_styles.css
|_images
  |_..
```

- Commit

Commit creates snapshots.  
1st commit to create snapshot 1.  
After changing the content of css file, 2nd commit is made creating snapshot 2.

Here 2 copies of css files are not created. Git only checks the initial state of css in first commit and checks what changes has been applied to this file now. Only these information are stored in git.

Git stores all changes made throughout the project in a branch called master(or main) by default.

- Under the hood

.git folder is created on the working directory which is a hidden folder.  
.git contains two areas staging area and commits(objects folder)

Changed Files are added to staging area to tell git that they are part of next commit.  
Now committing will add the changed files to Commits area.

Git tracks changes but does not store files again and again. Only in the initial commit, files are saved and after that, changes are saved.

## Git Commands

```bash
# Initialize git in the folder
git init

# get status of git repository
git status

# add files to staging area
git add filename
git add . # Stages all files

# commit files
git commit -m "write massage"
```

```bash
# Tell who you are to git
git config --global user.name "Your Name"
git config --global user.mail "yourmail@gmail.com"
```

```bash
# get log of commits
git log

# jump to specific commit
git checkout commit_id
```

## Branches & Commits

We can create copy of the master(or main) branch to create a new branch where changes can be made without touching the main working directory.

```bash
# To list all branches
git branch

# create new branch (no space allowed)
git branch second-branch

# Switching between branches
git checkout second-branch

# Create and Switch to new branch
git checkout -b branch-name

# Alternatives
# Switching between branches
git switch second-branch

# Create and Switch to new branch
git switch -c third-branch
```

- Merging branches

```bash
# merge second-branch to master(currently in master branch)
git merge second-branch
```

## What is HEAD?

- Head

Suppose master has 3 commits: c1, c2, c3  
Now we create a new-branch, So the head now refers to c3(commit from where new branch is created).

- Detached Head

In above example, if we checkout c2 which exists in both master and new-branch, the head is no longer in specific branch but is detached in two branches.

## Deleting Data

Data means commits, branches, files and so on.

```bash
# check which files are part of staging area
git ls-files

# delete a file in staging area
git rm filename
```

```bash
# undo unstaged change, tracked files
git checkout filename
git checkout . # all files

# alternative
git restore filename
git restore .
```

```bash
# List untracked file/directory which would be removed
git clean -dn

# Delete untracked file/directory
git clean -df
```

```bash
# Undo Staged changes

# copies latest stage of file, i.e. stage of file in HEAD of current branch into staging area
git reset filename

# checkout to initial state
git checkout filename

# alternative
git restore --staged filename
git checkout filename
```

```bash
# delete commit
# HEAD~1 means 1 step ahead of current commit, HEAD~2 means 2 step ahead of current commit
git reset --soft HEAD~1

# delete commit and remove from staging area
git reset HEAD~1

# newly added file from latest commit will also be deleted
git reset --hard HEAD~1
```

```bash
# Delete branches
# -d allows to delete only merged branches, -D will delete any type of branches
git branch -D second-branch

# Delete multiple branch
git branch -D second-branch third-branch
```
