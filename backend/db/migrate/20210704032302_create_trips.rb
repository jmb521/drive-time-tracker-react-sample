class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :weather
      t.date_time :start_time
      t.date_time :end_time
      t.string :time_of_day

      t.timestamps
    end
  end
end
