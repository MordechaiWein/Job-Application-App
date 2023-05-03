Job.destroy_all
User.destroy_all

puts "👷👷‍♂️ seeding database"

Job.create(name: "Dog Watcher", job_description: "need someone to watch my dog daily", pay: "10 dollars an hour")
Job.create(name: "Personal Trainer", job_description: "looking for someone who can help me exercise", pay: "75 dollars a session")
Job.create(name: "Gardener", job_description: "need someone to make me a garden", pay: "500 dollars for the entire job")
Job.create(name: "Software Engineer", job_description: "need someone to build my website", pay: "willing to pay a lot of money")
Job.create(name: "Tutor", job_description: "need someone to teach me python", pay: "20 dollars an hour")
User.create(username: "Mordechai", password: "bella888", password_confirmation: "bella888", image_url: "no image", bio: "Creator of New Carrer Network 🥇", admin: true)

puts "✅ done seeding"




   

  