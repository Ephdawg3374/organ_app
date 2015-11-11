class Track < ActiveRecord::Base
  validates :attributes, presence: true

  serialize :attributes, JSON

  # store :track_attributes, accessors: [ :name, :roll ], coder: JSON
end
