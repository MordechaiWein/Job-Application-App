class Application < ApplicationRecord
    belongs_to :user
    belongs_to :job

    validates :first_name, :last_name, :age, :work_experience, :phone_number, :email_address, presence: true
    validates :work_experience, length: {maximum: 250}
end


