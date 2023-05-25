Job.destroy_all
User.destroy_all

puts "👷‍♀️👷‍♂️👷‍♀️👷‍♂️ seeding database..."

Job.create(name: "Dog Watcher", job_description: "need someone to watch my dog daily", pay: "10 dollars an hour")
Job.create(name: "Personal Trainer", job_description: "looking for someone who can help me exercise", pay: "75 dollars a session")
Job.create(name: "Gardener", job_description: "need someone to make me a garden", pay: "500 dollars for the entire job")
Job.create(name: "Software Engineer", job_description: "need someone to build my website", pay: "willing to pay a lot of money")
Job.create(name: "Tutor", job_description: "need someone to teach me python", pay: "20 dollars an hour")
Job.create(name: "Financial manager", job_description: "need someone to manage my finances", pay: "100K a year")
Job.create(name: "Marketing Coordinator", job_description: "Seeking a skilled professional to coordinate marketing efforts", pay: "75K annually")
Job.create(name: "Software Engineer", job_description: "Join our team to develop innovative software solutions", pay: "120K per annum")
Job.create(name: "Graphic Designer", job_description: "Looking for a creative individual to design visually appealing graphics", pay: "60K yearly")
Job.create(name: "Operations Manager", job_description: "Manage day-to-day operations and improve efficiency", pay: "90K per year")
Job.create(name: "Sales Representative", job_description: "Drive sales and build strong customer relationships", pay: "80K annually")
Job.create(name: "Human Resources Specialist", job_description: "Handle HR-related tasks and support employee development", pay: "70K per annum")
Job.create(name: "Project Manager", job_description: "Lead project teams and ensure timely delivery of results", pay: "100K yearly")
Job.create(name: "Data Analyst", job_description: "Analyze data and provide valuable insights for decision-making", pay: "85K per year")
Job.create(name: "Customer Service Supervisor", job_description: "Oversee customer service team and maintain high satisfaction levels", pay: "75K annually")
Job.create(name: "Research Scientist", job_description: "Conduct research and contribute to scientific advancements", pay: "110K per annum")


puts "✅ done seeding"




   

  