class DriversController < ApplicationController

    def create
        driver = Driver.new(driver_params)
        if driver.save
            render json: driver
        else
            render json: {
                error: driver.errors.full_messages
            }
        end
    end

    def index
        drivers = Driver.all
        render json: drivers, include: [:trips]
    end

  
    # def incomplete_trips
    #     d = Driver.find_by(id: params[:id])
    #     if d
    #         render json: d.incomplete_trips
    #     else
    #         render json: {error: "Driver not found"}
    #     end
    # end

    private

    def driver_params
        params.require(:driver).permit(:first_name, :last_name)
    end
end
