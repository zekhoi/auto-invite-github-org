Auto invite member to Github Organization

#How to use

Setup your github token in `.env` file

```env
GITHUB_TOKEN=yourgithubtoken
ORGANIZATION=yourorganization
```
___

Input your emails in `emails.txt`
```txt
dummymail@mail.com
dummymail@mail.com
dummymail@mail.com
```
___

Run 
```bash
node invite.js
```
or
```bash
node invite
```