function loadTopic(topic) {
    const topicTitle = document.getElementById('topic-title');
    const topicContent = document.getElementById('topic-content');

    // You can fetch the content dynamically based on the selected topic
    // For simplicity, let's use static content for now
    let content = '';

    if (topic === 'algebra') {
        topicTitle.textContent = 'Algebra';
        content = 'Algebra content goes here.';
    } else if (topic === 'calculus') {
        topicTitle.textContent = 'Calculus';
        content = 'Calculus content goes here.';
    } else if (topic === 'geometry') {
        topicTitle.textContent = 'Geometry';
        content = 'Geometry content goes here.';
    }

    topicContent.innerHTML = content;
}
