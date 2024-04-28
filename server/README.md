# API Ports


## 1. GET api/ai/
* Req: none
* Res: "welcome"
* Description: This is a landing api endpoint.

## 2. POST api/ai/talk
* Req:
  - body:{string: question}
* Res:
  - Repliers search return, which would include
    1. number of listings
    2. number of pages
    3. listings info
* Description: This method will receive the question, in the *req.body.question*, from client about what properties they are searching for. Our AI model will extract information out based on the Repliers parameters for *Search Listings*, then generate a url with params filled in. Then this url will be handed over to Repliers for list searchings. The return, *res*, is the returned result from Repliers.

## 3. POST api/ai/answerQuestions
* Req:
  - body: {string: question, string property}
* Res
  - string: OpenAI's answer
* Description: This method is used to answer client's question about a specific property. Properties info has approx. 8000 tokens long, which is far beyond any AI model's input limit. Therefore, LangChain's recursive text splitter was used to break property info into an array filled with Document object. Then, the CreateStuffChain will vectorize user's question and do a distance calculation to extract k number of Document object that can be used to answer client's question. By doing this way, we save token usage --> save money from OpenAI. The return is answer to client's question from OpenAI.

## 4. POST api/listings/getProperty
* Req:
  - body:{string: mlsNumber}
* Res:
  - Replier's listing information object.
* Description: This method is used to provide information about one specific property. Our server will sent a request to Repliers *get a single listing* method by inserting the mlsNumber into the url query. Simple as that.
