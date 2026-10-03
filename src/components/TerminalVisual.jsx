import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import './TerminalVisual.css';

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'command', text: 'whoami' },
    { type: 'response', text: 'Suhas S Pai — Computer Science & Engineering Student' },
    { type: 'command', text: 'focus' },
    { type: 'response', text: 'Java Development + Full Stack Web Architecture' },
    { type: 'command', text: 'status' },
    { type: 'response', text: '⚡ Building practical applications & learning constantly' },
  ]);

  const handleCopy = () => {
    const codeSnippet = `class Developer {
    String name = "Suhas S Pai";
    String role = "CSE Student & Developer";
    String focus = "Java & Full Stack";
    double cgpa = 9.13;
    int graduation = 2028;

    void status() {
        System.out.println("Building practical & scalable software.");
    }
}`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', text: inputVal }];

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'whoami') {
      newHistory.push({ type: 'response', text: 'Suhas S Pai — CSE Student @ Canara Engineering College' });
    } else if (cmd === 'cgpa' || cmd === 'gpa') {
      newHistory.push({ type: 'response', text: 'Cumulative GPA: 9.13 / 10.0' });
    } else if (cmd === 'skills') {
      newHistory.push({ type: 'response', text: 'Java, C, R, JavaScript, React, Node.js, Express, MySQL, PostgreSQL, Supabase, Firebase' });
    } else if (cmd === 'contact') {
      newHistory.push({ type: 'response', text: 'LinkedIn: suhas-s-pai-072889357 | GitHub: suhas-s-pai' });
    } else if (cmd === 'help') {
      newHistory.push({ type: 'response', text: 'Available commands: whoami, focus, status, skills, cgpa, contact, clear' });
    } else {
      newHistory.push({ type: 'response', text: `Command not recognized: '${cmd}'. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="terminal-card glass-panel">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="terminal-tabs">
          <button
            className={`term-tab ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <TerminalIcon size={12} />
            <span>suhas@dev:~</span>
          </button>
          <button
            className={`term-tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <span>Developer.java</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="copy-btn"
          title="Copy snippet"
          aria-label="Copy snippet"
        >
          {copied ? <Check size={13} className="copied-icon" /> : <Copy size={13} />}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="terminal-body">
        {activeTab === 'terminal' ? (
          <div className="cli-container">
            <div className="cli-history">
              {history.map((item, idx) => (
                <div key={idx} className={`cli-line ${item.type}`}>
                  {item.type === 'command' ? (
                    <>
                      <span className="prompt-user">suhas@dev</span>
                      <span className="prompt-sym">:~$</span>
                      <span className="command-text">{item.text}</span>
                    </>
                  ) : (
                    <span className="response-text">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommandSubmit} className="cli-input-line">
              <span className="prompt-user">suhas@dev</span>
              <span className="prompt-sym">:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help'..."
                className="cli-input"
              />
            </form>
          </div>
        ) : (
          <pre className="code-container">
            <code>
              <span className="kwd">public class</span> <span className="cls">Developer</span> &#123;<br />
              &nbsp;&nbsp;<span className="typ">String</span> name = <span className="str">"Suhas S Pai"</span>;<br />
              &nbsp;&nbsp;<span className="typ">String</span> college = <span className="str">"Canara Engineering College"</span>;<br />
              &nbsp;&nbsp;<span className="typ">double</span> cgpa = <span className="num">9.13</span>;<br />
              &nbsp;&nbsp;<span className="typ">int</span> gradYear = <span className="num">2028</span>;<br /><br />
              &nbsp;&nbsp;<span className="kwd">public void</span> <span className="fnc">buildApp</span>() &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="typ">System</span>.out.println(<span className="str">"Transforming logic into practical reality."</span>);<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;
            </code>
          </pre>
        )}
      </div>

      {/* Footer bar */}
      <div className="terminal-footer">
        <div className="term-status-badge">
          <span className="status-indicator-dot" /> Java Development | UTF-8
        </div>
        <span className="term-tip">Interactive shell</span>
      </div>
    </div>
  );
}
