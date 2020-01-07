ShopifyApp.configure do |config|
  config.application_name = "POP UP Saint L Beau"
  config.api_key = "adf65d5dca67061cffad7d8c4a9f9532"
  config.secret = "743c55dc05deda73900466e0b2d47684"
  # config.api_key = "a48c107f75f2d30077c8b62e43b1cf17"
  # config.secret = "1f4552d81abcbd5cd8d4236d1e7eb09a"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://popup.saintlbeau.com/custom.js'}
  ]
end
