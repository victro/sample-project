FROM mongo

COPY data.json /data.json
CMD mongoimport --host mongo --db sample_project --collection admins --type json --file /data.json --jsonArray