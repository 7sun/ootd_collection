# Create Admin User
User.create(
first_name: 'Peter', 
last_name: 'Krouse',
email: 'pakrouse@gmail.com',
company: 'Loops Unlimited',
password: "Y9XDzSnIT*&W3N",
password_confirmation: "Y9XDzSnIT*&W3N",
admin: true
)

# 10.times do
#   User.create(
#   first_name: Faker::Name.first_name, 
#   last_name: Faker::Name.last_name,
#   email: Faker::Internet.email,
#   company: Faker::Company.name,
#   password: "password",
#   password_confirmation: "password",
#   admin: false
#   )
# end

# Create Collections
Collection.create(
  name: 'Summer 2015',
  current: true
  )

Collection.create(
  name: 'Fall 2015'
  )

Collection.create(
  name: 'Winter 2015'
  )

Collection.create(
  name: 'Spring 2016'
  )

Collection.create(
  name: 'Summer 2016'
  )

# # Create Prodcuts
# Product.create(
#   category: 'Tops',
#   style: 'Fancy Top',
#   style_num: 'D53#21',
#   color: 'red',
#   description: "It's a fancy top for fancy occasions"
#   )

# Product.create(
#   category: 'Pants',
#   style: 'Classic Pants',
#   style_num: 'D56#21',
#   color: 'blue',
#   description: "So classy. So you."
#   )

# Product.create(
#   category: 'Pants',
#   style: 'Modern Pants',
#   style_num: 'D56#21',
#   color: 'black',
#   description: "So classy. So you."
#   )

# Product.create(
#   category: 'Skirts',
#   style: 'Summer Skirt',
#   style_num: 'D53#14',
#   color: 'floral',
#   description: "Perfect for when its hot!"
#   )

# Product.create(
#   category: 'Skirts',
#   style: 'Short Skirt',
#   style_num: 'D53#14',
#   color: 'floral',
#   description: "Show some leg. Ooh lala."
#   )

# Product.create(
#   category: 'Dresses',
#   style: 'Floral Dress',
#   style_num: 'D53#31',
#   color: 'floral',
#   description: "Dress to impress"
#   )