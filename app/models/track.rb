class Track < ActiveRecord::Base
  validates :name, :roll, presence: true

  serialize :roll, JSON

  # store :track_attributes, accessors: [ :name, :roll ], coder: JSON
end
