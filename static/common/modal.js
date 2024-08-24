let modal = document.createElement("div");
modal.innerHTML = `
<div class="d-none">
<button type="button" class="none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="mButton">
  Launch static backdrop modal
</button>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="mBody">
        
      </div>
    
    </div>
  </div>
</div>
`;

document.body.appendChild(modal);

let mTitle = document.getElementById("staticBackdropLabel");
let mBody = document.getElementById("mBody");
let mButton = document.getElementById("mButton");
