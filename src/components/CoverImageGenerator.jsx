function CoverImageGenerator() {
  return (
    <section>
      <h3>AI 표지 생성</h3>

      <label>OpenAI API Key:</label>
      <input
        className="input-apikey"
        type="password"
        placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
      />

      <br />

      <label>생성 모델:</label>
      <select className="select-model">
        <option>GPT Image 3 (1024x1024)</option>
      </select>

      <br />

      <label>품질:</label>
      <select className="select-quality">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />

      <button type="button">AI 표지 생성</button>
    </section>
  );
}

export default CoverImageGenerator;