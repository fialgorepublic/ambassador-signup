ShopifyApp.configure do |config|
  config.application_name = "signup test"
  config.api_key = "adf65d5dca67061cffad7d8c4a9f9532"
  config.secret = "743c55dc05deda73900466e0b2d47684"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://d534c8d8.ngrok.io/custom.js'}
  ]
end
