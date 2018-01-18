require 'faker'

25.times do
  Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    price: Faker::Commerce.price.to_f
  )
end

  User.create(
    email: 'admin@admin.com',
    password: 'password',
    admin: true
  )

