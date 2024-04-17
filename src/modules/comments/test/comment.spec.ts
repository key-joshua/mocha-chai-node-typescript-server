import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("comment test caeses", () => {
  it("Should be able to post comment", (done) => {
    router()
      .post("/api/comments/post-comment")
      .send({
        title: "Awesome",
        description: "Your past week work was impressive",
        user: {
          name: "Josue",
          age: 40,
          address: {
            village: "Kalisimbi",
            district: "Kicukiro",
          },
        },
      })
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("data");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  it("Should be able to get comments", (done) => {
    router()
      .get("/api/comments/get-comments")
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("data");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });
});
