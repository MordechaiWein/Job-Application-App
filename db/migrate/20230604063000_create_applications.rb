class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :word_experience
      t.integer :user_id
      t.integer :job_id
      t.string :phone_number
      t.string :email_address

      t.timestamps
    end
  end
end
