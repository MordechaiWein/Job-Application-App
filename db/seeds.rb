# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding database"

Job.create(name: "Dog Watcher", job_description: "need someone to watch my dog daily", pay: "10 dollars an hour")
Job.create(name: "Personal Trainer", job_description: "looking for someone who can help me exercise", pay: "75 dollars a session")
Job.create(name: "Gardener", job_description: "need someone to make me a garden", pay: "500 dollars for the entire job")
Job.create(name: "tutor", job_description: "need someone to teach me python", pay: "20 dollars an hour")

puts "✅ done seeding"