## Aggiornare la repository

Per aggiornare il branch `project` e unire le modifiche su `main`, puoi usare i seguenti comandi:

```bash
# Aggiornare il branch project
git add .
git commit -m "messaggio"
git push

# Passare su main e fare merge
git checkout main
git merge project
git push origin main
