<!-- docs/API_DOCS.md -->
# API Documentation

## Products
`GET /api/products` - List all products  
Query Params:
- search: string
- limit: number
- page: number

## Orders
`POST /api/orders` - Create new order  
Request Body:
```json
{
  "items": [
    {"productId": "string", "quantity": number}
  ],
  "total": number
}