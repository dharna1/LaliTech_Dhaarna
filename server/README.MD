SERVER
1. cd server   (In Server Folder)
2. npm install (For NodeModules)
3. npm run start
4. Hit Apis

PLEASE CHANGE TOKENS 

CURL FOR REGISTER USER
curl --location 'localhost:3000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "ab1122@gmail.com",
    "password": "hihihihi"
}
' 


CURL FOR LOGIN USER 
curl --location 'localhost:3000/api/auth/login' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGNhNDk2ODYzYjY0NDQwY2Q3MmQ3ZiIsImlhdCI6MTc1NDA0ODQwMiwiZXhwIjoxNzU0MDUyMDAyfQ.FmcZQsjVmrJfYsyhbIDA-CypOTA_6eB84eVmD8LV-Qk' \
--data-raw '{
    "email": "ab1122@gmail.com",
    "password": "hihihihi"
}
'

CURL FOR ADD PRODUCTS
curl --location 'localhost:3000/api/products' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGY2ZGM4OTIxZDIxODljZDc5OGE4NyIsImlhdCI6MTc1NDIzMDI1MiwiZXhwIjoxNzU0MjMzODUyfQ.qIacHFjBKzd5B4LDmF9BO8ibBlGJ0gm9CTzG1yCL1OA' \
--data '{
    "name": "Hair Band",
    "price": 40,
    "category": "Fashion",
    "description": "Solid"
}
'

CURL FOR GET PRODUCTS
curl --location 'localhost:3000/api/products' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGY2ZGM4OTIxZDIxODljZDc5OGE4NyIsImlhdCI6MTc1NDIzMDI1MiwiZXhwIjoxNzU0MjMzODUyfQ.qIacHFjBKzd5B4LDmF9BO8ibBlGJ0gm9CTzG1yCL1OA'


CURL FOR GET PRODUCTS BY ID
curl --location 'localhost:3000/api/products/688f6e58921d2189cd798a8b' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGY2ZGM4OTIxZDIxODljZDc5OGE4NyIsImlhdCI6MTc1NDIzMDI1MiwiZXhwIjoxNzU0MjMzODUyfQ.qIacHFjBKzd5B4LDmF9BO8ibBlGJ0gm9CTzG1yCL1OA'


CURL FOR UPDATE PRODUCT
curl --location --request PUT 'localhost:3000/api/products/688f6e58921d2189cd798a8b' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGY2ZGM4OTIxZDIxODljZDc5OGE4NyIsImlhdCI6MTc1NDIzMDI1MiwiZXhwIjoxNzU0MjMzODUyfQ.qIacHFjBKzd5B4LDmF9BO8ibBlGJ0gm9CTzG1yCL1OA' \
--data '{
    "name": "Bands"
}'


CURL FOR DELETE PRODUCT
curl --location --request DELETE 'localhost:3000/api/products/688f6e58921d2189cd798a8b' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGY2ZGM4OTIxZDIxODljZDc5OGE4NyIsImlhdCI6MTc1NDIzMDI1MiwiZXhwIjoxNzU0MjMzODUyfQ.qIacHFjBKzd5B4LDmF9BO8ibBlGJ0gm9CTzG1yCL1OA'








