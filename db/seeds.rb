puts "👷 seeding database"

Job.create(name: "Dog Watcher", job_description: "need someone to watch my dog daily", pay: "10 dollars an hour")
Job.create(name: "Personal Trainer", job_description: "looking for someone who can help me exercise", pay: "75 dollars a session")
Job.create(name: "Gardener", job_description: "need someone to make me a garden", pay: "500 dollars for the entire job")
Job.create(name: "Tutor", job_description: "need someone to teach me python", pay: "20 dollars an hour")
User.create(username: "Mordechai", password: "bella888", image_url: "https://i.natgeofe.com/k/02444b59-a50d-48e6-939b-4db10f895e66/5-reasons-eagle_4x3.jpg", bio: "Creator of New Career Network", admin: true)

puts "✅ done seeding"