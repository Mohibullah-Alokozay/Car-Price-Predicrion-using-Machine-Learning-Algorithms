from flask import *
import pandas as pd
import pickle

app = Flask(__name__)
model = pickle.load(open('decision_tree_regressor_model.pkl', 'rb'))

carName = {
    "4 Runner": "0",
    "Benz": "1",
    "Lexus lX570": "2",
    "Mercedes Istana": "3",
    "Range Rover": "4",
    "Suzuki": "5",
    "Toyota Coaster": "6",
    "Toyota Corolla": "7",
    "Toyota Corolla Fielder": "8",
    "Toyota Corolla Hatchback": "9",
    "Toyota Hiace": "10",
    "Toyota Hilux": "11",
    "Toyota Land Cruiser": "12",
    "Toyota Prius Hybrid": "13",
    "Toyota Townace": "14"
}
@app.route('/')
def index():
    return render_template('index.html', carName=carName, predictData='', error='')

@app.route('/predict', methods=['POST'])
def index2():
    submitData1 = request.form['car-name']
    submitData2 = request.form['company']
    submitData3 = request.form['year']
    submitData4 = request.form['color']
    submitData5 = request.form['hand']
    submitData6 = request.form['engine']
    submitData7 = request.form['transmission']
    submitData8 = request.form['fuel_type']
    if (submitData1 == ''):
        return render_template('index.html', carName=carName, predictData='', error='Please Select Car Model')
        
    
    prdictionValue = model.predict([[submitData1, submitData2, submitData3, submitData4, submitData5, submitData6, submitData7, submitData8]])
    return render_template('index.html', carName=carName, predictData=prdictionValue[0], car=submitData1, color=submitData4,  error='')

if __name__ == "__main__":
    app.run('localhost', debug=True, port=5000)

