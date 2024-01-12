welcome to this template. here are the steps to bet this up an running in development:

0. install the eas cli if needed
1. create a new repo using this template.
2. replace the rn-template with your project name in the app.json & package.json, then do a npm i
3. update the package name in app.json
4. create a supabse project and copy the url and the anon key in the .env
5. enable apple as an auth provider in the supabase project. you need to add host.exp.Exponent in the Service ID field.
6. create a new SHA1 key using the eas credentials command. at this point you need to generate a SHA1 key for platform android and profile development
7. create a new project in google cloud, configure the oAuth constent screen and obtain a android client id using the SHA1 key from the eas credentials and a web client id (doesn't need a SHA1 key)
8. paste the web client id into the .env
9. make a development build for android using the eas cli
10. download the development build onto your android device



taking it to production:
idk yet
