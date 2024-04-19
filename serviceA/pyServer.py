from flask import Flask, request
app = Flask(__name__)

@app.route('/', methods=['POST', 'OPTIONS'])
def receive_data():
    if request.method == 'OPTIONS':
        # Respond to CORS preflight
        response = app.make_default_options_response()
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        response.headers.extend(headers)
        return response
    elif request.method == 'POST':
        data = request.json
        print(f"Received CID: {data['cid']}, Timestamp: {data['timestamp']}")
        return {'message': 'Data received'}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3057)

