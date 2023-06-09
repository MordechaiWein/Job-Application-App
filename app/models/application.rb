class Application < ApplicationRecord
    belongs_to :user
    belongs_to :job

    validates :first_name, :last_name, :age, :work_experience, :phone_number, :email_address, presence: true
    validates :work_experience, length: {maximum: 100}
    validates :phone_number, format: { with: /\A(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}\z/ }
    validates :email_address, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }
    validates :user_id, uniqueness: {scope: :job_id, message: "error! You may not apply for the same job twice"}
end
