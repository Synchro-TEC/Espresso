export default {
  defaultForm: `<form class="sv-form">
  <fieldset>
      <legend>Exemplo de titulo</legend>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Name</span>
                  <input type="text" name="name">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  compactForm: `<form class="sv-form sv-compact">
  <fieldset class="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Name</span>
                  <input type="text" name="name">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  formGrid: `<form class="sv-form sv-compact">
  <fieldset class="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <div class="sv-row--with-gutter">
          <div class="sv-column">
              <label><span>First Name</span>
                  <input type="text" name="firstName">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Last Name</span>
                  <input type="text" name="lastName">
              </label>
          </div>
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Confirm E-mail</span>
                  <input type="text" name="confirmEmail">
              </label>
          </div>
      </div>
      <div class="sv-row--with-gutter">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  formFull: `<form class="sv-form">
  <fieldset>
      <legend>Access Info</legend>
      <label><span>Username</span>
          <input type="text" placeholder="Your username to login app">
      </label>
      <div class="sv-row--with-gutter sv-ma--0">
          <div class="sv-column">
              <label><span data-info="(8 caracters)" data-error="Error">Password</span>
                  <input type="password" class="is--invalid">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Confirm Password</span>
                  <input type="password">
              </label>
          </div>
      </div>
  </fieldset>
  <fieldset>
      <legend>Personal Info</legend>
      <label><span>Full Name</span>
          <input type="text" placeholder="All names">
      </label>
      <label><span data-info="(Optional)">Birth Date</span>
          <input type="text" placeholder="dd/mm/yyyy">
      </label>
      <label><span>Gender:</span>
          <div class="sv-select">
              <select>
                  <option value="">Please, select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
              </select>
              <label><i class="fa fa-angle-down fa-fw"></i></label>
          </div>
      </label>
  </fieldset>
  <fieldset>
      <legend>Skills</legend>
      <label><span>Language:</span>
          <label>
              <input type="checkbox" value="English">
              English
          </label>
          <label>
              <input type="checkbox" value="Portuguese">
              Portuguese
          </label>
          <label>
              <input type="checkbox" value="Spanish">
              Spanish
          </label>
      </label>
      <label><span>Level:</span>
          <label>
              <input type="radio" value="Junior" name="level">
              Junior
          </label>
          <label>
              <input type="radio" value="Master" name="level">
              Master
          </label>
          <label>
              <input type="radio" value="Leader" name="level">
              Leader
          </label>
          <label>
              <input type="radio" value="Senior" name="level">
              Senior
          </label>
      </label>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  formInline: ``,
  progressBar: `<form class="sv-form">
  <progress value="54" max="100" />
</form>`,
  validInvalid: `<form class="sv-form">
  <div class="sv-row--with-gutter">
      <div class="sv-column">
          <label><span>Campo validado</span>
              <input type="text" placeholder="valid" class="is--valid">
          </label>
      </div>
      <div class="sv-column">
          <label><span>Campo Invalidado</span>
              <input type="text" placeholder="invalid" class="is--invalid">
          </label>
      </div>
  </div>
</form>`,
  inputMono: `<form class="sv-form">
    <div class="sv-row--with-gutter">
        <div class="sv-column">
            <label><span>Campo normal</span>
                <input type="text" placeholder="normal">
            </label>
        </div>
        <div class="sv-column">
            <label><span>Campo Monospaced (Code)</span>
                <input type="text" placeholder="monospaced" class="code">
            </label>
        </div>
    </div>
</form>`,
  labelsMessage: `<form class="sv-form">
  <div class="sv-row--with-gutter">
      <div class="sv-column">
          <label><span data-info="(8 caracters)">CEP</span>
              <input type="text">
          </label>
      </div>
      <div class="sv-column">
          <label><span data-info="(8 caracters)" data-error="Cep inválido">CEP</span>
              <input type="text" class="is--invalid">
          </label>
      </div>
  </div>
</form>`,
};
