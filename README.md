






Windows PowerShell
Copyright (C) Microsoft Corporation. Tous droits réservés.
Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
PS D:\ECE\ING4\web\lab1> git remote
PS D:\ECE\ING4\web\lab1> git remote add origin https://github.com/Yorkles/ING4_SI_Gr02_Ribeiro_Romain.git
PS D:\ECE\ING4\web\lab1> git remote
origin
PS D:\ECE\ING4\web\lab1> git branch
  master
* tp1
PS D:\ECE\ING4\web\lab1> git checkout master
Switched to branch 'master'
Enumerating objects: 6, done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.17 KiB | 2.17 MiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Yorkles/ING4_SI_Gr02_Ribeiro_Romain.git
 * [new branch]      master -> master
PS D:\ECE\ING4\web\lab1> git checkout tp1
touch : Le terme «touch» n'est pas reconnu comme nom d'applet de commande, fonction, fichier de script ou programme exécutable. Vérifiez l'orthographe du nom, ou    
Au caractère Ligne:1 : 1
+ touch README.md
+ ~~~~~
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS D:\ECE\ING4\web\lab1> git add README.md
PS D:\ECE\ING4\web\lab1> git commit "Finish readme"
error: pathspec 'Finish readme' did not match any file(s) known to git
PS D:\ECE\ING4\web\lab1> git commit -m "do the readme file asap"
[tp1 96eab24] do the readme file asap
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
PS D:\ECE\ING4\web\lab1> git push origin tp1
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 275 bytes | 275.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'tp1' on GitHub by visiting:
remote:      https://github.com/Yorkles/ING4_SI_Gr02_Ribeiro_Romain/pull/new/tp1
remote:
To https://github.com/Yorkles/ING4_SI_Gr02_Ribeiro_Romain.git
 * [new branch]      tp1 -> tp1
PS D:\ECE\ING4\web\lab1>