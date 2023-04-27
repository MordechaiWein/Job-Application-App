class Job < ApplicationRecord
    has_many :applications
    has_many :users, through: :applications

    validates :name, :job_description, :pay, presence: true
    validates :job_description, length: {maximum: 150}
end
