require 'faker'

genre = [
  'Thriller', 'Suspense', 'Adventure', 'Fiction', 'Erotic'
]

25.times do
  Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: genre.sample,
    price: Faker::Commerce.price.to_f,
    description: Faker::Lorem.paragraph
  )
end

  User.create(
    email: 'admin@admin.com',
    password: 'password',
    admin: true
  )

