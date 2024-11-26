`npx sls offline`
- run serverless application locally

`sls === serverless`
- BOTH are same
- sls is symbolic link to serverless
<!------------------------------------------------------------------------------------>

<WORKSSSSS>
npx serverless invoke local --function serverless346 --path resources/blob23.json --aws-profile lais23

<DOESNT WORK>
aws lambda invoke \
    /dev/null \
    --endpoint-url http://localhost:4000/dev/jingchak/param13/posts/showAllAgain \
    --function-name serverless346 \
    --region us-east-1 --profile lais23

<!------------------------------------------------------------------------------------>