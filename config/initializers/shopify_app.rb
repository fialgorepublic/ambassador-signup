ShopifyApp.configure do |config|
  config.application_name = "POP UP Saint L Beau"
  # config.api_key = "adf65d5dca67061cffad7d8c4a9f9532"
  # config.secret = "743c55dc05deda73900466e0b2d47684"
  config.api_key = "331cb584654d6d2c9a6334de943c17c9"
  config.secret = "11a06c64579d575516b8e0519ce8688f"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://popup.saintlbeau.com/custom.js'}
  ]
end
